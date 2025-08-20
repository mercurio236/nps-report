'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import StarRating from './star-rating'
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
import { toast } from 'sonner'
import { api } from '@/services/api'
import { redirect, useParams } from 'next/navigation'

const avaliationSchema = z.object({
  companyId: z.string(),
  stars: z.number({ error: 'Campo obrigátorio' }).min(0).max(5),
  comment: z.string().optional(),
})

type AvaliationSchemaProps = z.infer<typeof avaliationSchema>

export function FormAvaliation() {
  const params = useParams<{ id: string }>()
  const companyId = params.id ?? ''

  const form = useForm<AvaliationSchemaProps>({
    resolver: zodResolver(avaliationSchema),
    defaultValues: {
      companyId,
      stars: 0,
      comment: '',
    },
  })

  async function handleSubmitForm(data: AvaliationSchemaProps) {
    try {
      const response = await api('/responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Erro ao cadastrar empresa')
      }

      toast.success('Obrigato por sua avaliação', {
        richColors: true,
        position: 'top-left',
      })
      setTimeout(() => {
        redirect('/')
      }, 3000)
    } catch (err) {
      console.error(err)
      toast.error('Erro ao avaliar empresa', {
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
              name="stars"
              render={({ field: { value, name, onChange } }) => (
                <FormItem className="grid w-full max-w-sm items-center gap-3 mb-10">
                  <Label>Quantas estrelas você avalia a empresa?</Label>
                  <StarRating value={value} onChange={onChange} name={name} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field: { value, name, onChange } }) => (
                <FormItem className="grid w-full items-center gap-3">
                  <FormLabel htmlFor="comment">
                    Deixe seu comentario (opcional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      id="comment"
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
              Avaliar
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
