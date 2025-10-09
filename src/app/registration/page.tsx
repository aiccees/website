import React from 'react'
import { GoogleForm } from '@/components/ui/iframe'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function RegistrationPage() {
  // Example Google Form URL - replace with your actual form URL
  const googleFormUrl = "https://forms.office.com/pages/responsepage.aspx?id=kn2ybltGPkK4rp8nVlmTlYgK_n1-yllAncqjnHrWTZRUNTY2UFRBRjYxMEpQUkxaS1VaTlhBM0pRSS4u&route=shorturl"
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Conference Registration
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Register for the AICCEES Conference 2024. Please fill out the form below to complete your registration.
          </p>
        </div>
        
        <Card className="w-full max-w-4xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Registration Form
            </CardTitle>
            <p className="text-neutral-600 dark:text-neutral-400">
              Please provide your details to register for the conference
            </p>
          </CardHeader>
          <CardContent>
            <GoogleForm
              formUrl={googleFormUrl}
              height="700"
              showTitle={false}
              className="w-full"
            />
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Having trouble with the form? Contact us at{' '}
            <a 
              href="mailto:info@aiccees.com" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              info@aiccees.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
