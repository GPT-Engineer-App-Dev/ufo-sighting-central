import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const SubmitSighting = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-3xl">Submit a Sighting</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Name" {...register("name")} />
          <Input type="email" placeholder="Email" {...register("email")} />
          <Input type="date" placeholder="Date of Sighting" {...register("date")} />
          <Input placeholder="Location" {...register("location")} />
          <Textarea placeholder="Description" {...register("description")} />
          <Input type="file" {...register("image")} />
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </div>
  );
};

export default SubmitSighting;