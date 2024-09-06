import { Box, Button } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function Page({ items }: { items: any[] }) {
  return (
    <Box>
      This is test serverSideProps for second instance
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<{ items: any[] }> = async ({
  req,
}) => {
  const result = await axios.post("https://lorem-json.com/api/json", {
    name: "{{name()}}",
    age: "{{int(25, 30)}}",
    country: "{{country()}}",
  });
  return {
    props: {
      items: result.data,
    },
  };
};
