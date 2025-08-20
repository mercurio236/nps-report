'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { api } from '@/services/api'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'

const avaliationSchema = z.object({
  name: z.string({ error: 'Campo obrigatorio.' }),
  description: z.string({ error: 'Campo obrigatorio' }),
  stars: z.number().default(0).optional(),
})

type AvaliationSchemaProps = z.infer<typeof avaliationSchema>

export function FormCreateComapany() {
  const form = useForm<AvaliationSchemaProps>({
    resolver: zodResolver(avaliationSchema),
    defaultValues: {
      stars: 0,
    },
  })

  async function handleSubmitForm(data: AvaliationSchemaProps) {
    try {
      const response = await api('/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Erro ao cadastrar empresa')
      }

      toast.success('Empresa criada com sucesso', {
        richColors: true,
        position: 'top-left',
      })
      setTimeout(() => {
        redirect('/')
      }, 3000)
    } catch (err) {
      console.error(err)
      toast.error('Erro ao criar empresa', {
        richColors: true,
        position: 'top-left',
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <Card>
          <CardContent className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="name"
              defaultValue=""
              render={({ field: { value, name, onChange } }) => (
                <FormItem className="grid w-full max-w-sm items-center gap-3 mb-10">
                  <Label>Nome da empresa</Label>
                  <Input value={value} name={name} onChange={onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field: { value, name, onChange } }) => (
                <FormItem className="grid w-full max-w-sm items-center gap-3">
                  <FormLabel htmlFor="description">Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      id="description"
                      name={name}
                      value={value}
                      onChange={onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button variant="company" size="lg" type="submit">
              Cadastrar
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
