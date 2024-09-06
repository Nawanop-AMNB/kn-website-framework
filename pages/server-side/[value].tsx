import { Box, Button } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function Page({ items, query }: { items: any[]; query: any }) {
  return (
    <Box>
      This is test serverSideProps
      <pre>{JSON.stringify(items, null, 2)}</pre>
      <pre>{JSON.stringify(query, null, 2)}</pre>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<{ items: any[] }> = async ({
  req,
  query,
}) => {
  const result = await axios.post("https://lorem-json.com/api/json", {
    name: query.value,
    age: "{{int(25, 30)}}",
    country: "{{country()}}",
  });
  return {
    props: {
      items: result.data,
      query: query,
    },
  };
};
