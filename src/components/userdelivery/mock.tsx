// Import necessary modules and components
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { api } from '~/utils/api';
import MaxWidthWrapper from '../layout/max-width-wrapper';


const formSchema = z.object({
  name: z.string(),
  branch: z.string(),
  role: z.string(),
  linkedin: z.string().url({
    message: 'Please enter a valid LinkedIn profile URL.',
  }),
  github: z.string().url({
    message: 'Please enter a valid GitHub profile URL.',
  }),
  imageLink: z.string()
});

const AddTeam = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      branch: '',
      role: '',
      linkedin: '',
      github: '',
      imageLink: '',
    },
  });
  const router = useRouter()

  const roleOptions = ["Chairman", "Vice Chairman", "Secretary", "Treasurer", "Joint Secretary", "Student Advisor" ,"Program Committee Head", "Program Committee Co-Head", "Social Media Head", "Web Editor Head", "Web Editor Co-Head", "MC Committee Head", "MC Committee Co-Head", "Graphic Committee Head", "Graphic Committee Co-Head", "Magazine Committee Head", "Magazine Committee Co-Head", "Photography Committee Head", "Photography Committee Co-Head", "Android Domain Head", "Android Domain Co-Head", "Web Domain Head", "Web Domain Co-Head", "AIML Domain Head", "AIML Domain Co-Head", "CyberSecurity Domain Head", "CyberSecurity Domain Co-Head", "Final Year Representative", "Third Year Representative", "Second Year Representative"];

  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (image) {
        setUploading(true);
        
        console.log(form.getValues())
        toast("User has been created", {
          description: `${values.name} entry created in the database.`,
        })
       
        
      }


      console.log('Done', values);
    } catch (error) {
      console.error('Error creating team:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <MaxWidthWrapper>
      <h1>Join the Team.</h1>
      <div style={{ padding: '20px' }}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Form fields for name, branch, role, linkedin, github, imagelink */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Name"
                      {...field}
                      style={{ padding: '10px' }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Branch</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Branch"
                      {...field}
                      style={{ padding: '10px' }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    {/* Dropdown for selecting role */}
                    <select
                      {...field}
                      style={{ padding: '10px', fontSize: '16px' }}
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      {roleOptions.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter LinkedIn URL"
                      {...field}
                      style={{ padding: '10px' }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter GitHub URL"
                      {...field}
                      style={{ padding: '10px' }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
  control={form.control}
  name="imageLink"  // Update the name attribute to match the form schema
  render={({ field }) => (
    <FormItem>
      <FormLabel>Upload Image</FormLabel>
      <FormControl>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

            <Button
              type="submit"
              style={{ padding: '10px' }}
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
      
    </MaxWidthWrapper>
  );
};

export default AddTeam;