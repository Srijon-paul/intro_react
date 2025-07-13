import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form' // this will import a controller which will pass on the control to the parent element who call this editor

export default function RTE({ name, control, label, defaultValue = "" }) {
	return (
		<div className='w-full'>
			{label && <label className='inline-block mb-1 pl-'>{label}</label>}

			<Controller
				name={name || "content"}
				control={control} //  this will give the control to the parent element

				// render takes a call back taking fields as key and value as event depending on which it changes or renders
				render={({ field: { onChange } }) => (
					<Editor
						initialValue='default value' // it can be taken as any default value
						// init is used to specify what are the features we will choose for our editor 
						// this things are to be studied from documentation
						init={{
							initialValue: defaultValue,
							height: 500,
							menubar: true,
							plugins: [
								"image",
								"advlist",
								"autolink",
								"lists",
								"link",
								"image",
								"charmap",
								"preview",
								"anchor",
								"searchreplace",
								"visualblocks",
								"code",
								"fullscreen",
								"insertdatetime",
								"media",
								"table",
								"code",
								"help",
								"wordcount",
								"anchor",
							],
							toolbar:
								"undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
							content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
						}}
						onEditorChange={onChange}
					/>
				)}
			/>
		</div>
	)
}