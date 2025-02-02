-- PostgreSQL database dump

-- Dumped from database version 16.4 (Ubuntu 16.4-0ubuntu0.24.04.2)
-- Dumped by pg_dump version 16.4 (Ubuntu 16.4-0ubuntu0.24.04.2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';
SET default_table_access_method = heap;

-- Create the products table
CREATE TABLE public.products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price NUMERIC(10, 2),
    image VARCHAR(255)
);

-- Data for the products table
COPY public.products (id, name, price, image) FROM stdin;
1	Ceramic Mug	12.99	/images/mug.jpg
2	Stainless Steel Spoon	3.49	/images/spoon.jpg
3	Non-Stick Cooking Pot	29.99	/images/pot.jpg
4	Microwave Oven	89.99	/images/microwave.jpg
\.

-- Grant permissions
GRANT ALL ON TABLE public.products TO lucy;
