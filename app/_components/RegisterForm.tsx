'use client'
import { Button, Checkbox, CheckboxGroup, DateInput, DateValue, Input } from '@nextui-org/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation'

const RegisterForm = ({ id }: { id: number }) => {
  const router = useRouter();
  const users = [];

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      birth: null,
      checked: []
    },

    onSubmit: async (values) => {
      // @ts-ignore: Object is possibly 'null'.
      let birth_formatted = values.birth.toDate();
      users.push({
          id: id, name: values.fullName,
          email: values.email, birth: birth_formatted, social: values.checked
        });
        router.push(`/participants/${id}`);
        router.refresh();
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} className='grid gap-8'>
      <h3>Registration Form</h3>
      <Input
        name="fullName"
        label="Full Name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <DateInput
        name="birth"
        label="Date of birth"
        onChange={(birth: DateValue) => formik.setFieldValue("birth", birth)}
        value={formik.values.birth}

      />



      <CheckboxGroup
        label="Where did you hear about this event?"
        orientation="horizontal"
        color="secondary"
        classNames={{
          label: "text-black",
          wrapper: "gap-8"
        }}
      >
        <Checkbox
          name="checked"
          onChange={formik.handleChange}
          value="social">Social media</Checkbox>
        <Checkbox
          name="checked"
          onChange={formik.handleChange}

          value="friends">Friends</Checkbox>
        <Checkbox
          name="checked"
          onChange={formik.handleChange}

          value="self-found">Founded myself</Checkbox>
      </CheckboxGroup>


      <Button type="submit" className="w-48 justify-self-center">Submit</Button>

    </form>

  );

};


export default RegisterForm;
