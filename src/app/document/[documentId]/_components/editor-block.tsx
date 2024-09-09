"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Editor from "@/components/editor";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { revalidatePath } from "next/cache";

import { useToast } from "@/components/ui/use-toast";
import DrawerAI from "./drawer-ai";
import ShareButton from '@/components/ShareButton';
import SettingsButton from '@/components/SettingsButton';
import NotificationIcon from '@/components/NotificationIcon';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { AiOutlineEdit } from 'react-icons/ai'; // Or any other icon you prefer

const FormSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2),
});

interface DocumentProps {
  id: string;
  userId: string;
  title: string | null;
  description: string | null;
  createAt: Date;
  updateAt: Date;
}

interface EditorBlockProps {
  document?: DocumentProps | null;
}

const EditorBlock: React.FC<EditorBlockProps> = ({ document }) => {
  const { toast } = useToast();
  const router = useRouter();
  if (!document) {
    redirect("/");
  }

  const EditorForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: document.title || "",
      description: document.description || "",
    },
  });

  React.useEffect(() => {
    if (document.description) {
      EditorForm.setValue('description', document.description);
    }
  }, [document.description, EditorForm]);

  async function onUpdateChange(values: z.infer<typeof FormSchema>) {
    try {
      await axios.put(`/api/document/${document?.id}`, values);
      toast({ title: "Document Successfully Updated" });
      revalidatePath("/");
      revalidatePath("/document/" + document?.id);
    } catch (error) {}
  }

  const onDocumentDelete = async () => {
    try {
      await axios.delete(`/api/document/${document?.id}`);
      toast({
        title: "Document Deleted Successfully",
      });
      router.push('/overview');
    } catch (error) {
      console.error(error);
      toast({
        title: "Error deleting document",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="px-4">
      <div className="flex float-right my-2 space-x-4">
        <ShareButton />
        <SettingsButton />
        <NotificationIcon />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <AiOutlineEdit className="h-4 w-4 mr-2" />
              Actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={EditorForm.handleSubmit(onUpdateChange)}>
              Save Changes
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDocumentDelete} className="text-red-600">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DrawerAI 
          description={document.description} 
        />
      </div>
      <Form {...EditorForm}>
        <form
          onSubmit={EditorForm.handleSubmit(onUpdateChange)}
          className="space-y-8"
        >
          <FormField
            control={EditorForm.control}
            name="title"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormControl>
                  <Input placeholder="Enter Title here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={EditorForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Editor {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* <div className="mt-120 flex space-x-4">
            <Button type="submit">Save Changes</Button>
            <Button type="button" variant="destructive" onClick={onDocumentDelete}>
              Delete
            </Button>
          </div> */}
        </form>
      </Form>
    </div>
  );
};

export default EditorBlock;
