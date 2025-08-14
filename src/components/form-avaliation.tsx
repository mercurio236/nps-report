'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
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

const avaliationSchema = z.object({
  nameCompany: z.string(),
  stars: z.number({ error: 'Campo obrigátorio' }),
  comments: z.string().optional(),
})

type AvaliationSchemaProps = z.infer<typeof avaliationSchema>

export function FormAvaliation() {
  const form = useForm<AvaliationSchemaProps>({
    resolver: zodResolver(avaliationSchema),
    defaultValues: {
      nameCompany: 'Empresa 01',
    },
  })

  async function handleSubmitForm(data: AvaliationSchemaProps) {
    console.log(data)
  }

  console.log(form.formState.errors)
  const nameCompany = form.watch('nameCompany')

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <Card>
          <CardHeader>
            <CardTitle>{nameCompany}</CardTitle>
          </CardHeader>
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
              name="comments"
              render={({ field: { value, name, onChange } }) => (
                <FormItem className="grid w-full max-w-sm items-center gap-3">
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
