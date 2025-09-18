import React from "react";
import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/home/view';
import {useRouter} from "../routes/hooks/index.js";
import {useEffect} from "react";

// ----------------------------------------------------------------------

export default function HomePage() {
  const router = useRouter()
  useEffect(() => {
    router.push('/auth/jwt/login')
  }, []);
  return (
    <>
      <Helmet>
        <title> Minimal: The starting point for your next project</title>
      </Helmet>

      <HomeView />
    </>
  );
}
