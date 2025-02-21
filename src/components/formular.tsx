"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Toast } from "./ui/toast"
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { POST_DONATIONS_URL } from "../constants"

const DonationSchema = z.object({
  person_name: z.string().min(2, {
    message: "Person's name benötigt mindestens 2 Zeichen.",
  }),
  amount: z.number().min(0.01, {
    message: "Spende muss größer sein als 0€.",
  }),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Bitte geb ein gültiges Datum ein.",
  }),
})
const DonationFormSchema = DonationSchema.extend({
  amount : z.string(),
});

export type Donation = {
  person_name: string
  amount: number
  date: string
}

export function DonationForm() {
  const form = useForm<z.infer<typeof DonationFormSchema>>({
    resolver: zodResolver(DonationFormSchema),
    defaultValues: {
      person_name: "",
      amount: "0",
      date: "",
    },
  })

  async function onSubmit(data: z.infer<typeof DonationFormSchema> ) {
    try {
      const convertedData : z.infer<typeof DonationSchema> = {
        ...data,
        amount: parseFloat(data.amount),
      };
      const response = await fetch(`${POST_DONATIONS_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(convertedData),
      })

      if (response.ok) {
        Toast({
          title: "Spende erfolgreich übermittelt!",
        })
      } else {
        throw new Error("Spende konnte nicht übermittelt werden..");
      }
    } catch (error) {
      Toast({
        title: "Error versuche es nochmal.",
      })
    }
  }

  return (
    <div className="w-full flex justify-center mt-10">
      <div className=" w-200 bg-[#085942] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-[#D9C7B8] mb-6 underline">Spendenformular</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="person_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-[#D9C7B8]">Person's Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-2 text-[#0D0D0D] rounded-md p-2 w-full" />
                  </FormControl>
                  <FormDescription className="text-sm text-[#0D0D0D]">Name des Spenders</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-[#D9C7B8]">Betrag</FormLabel>
                  <FormControl>
                    <Input {...field}  type="number" className="border-2 border-gray-300 rounded-md p-2 w-full" />
                  </FormControl>
                  <FormDescription className="text-sm text-[#0D0D0D]">Der Betrag der Spende</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-[#D9C7B8]">Datum</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="border-2 border-gray-300 rounded-md p-2 w-full" />
                  </FormControl>
                  <FormDescription className="text-sm text-[#0D0D0D]">Datum der Spende</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">Absenden</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
