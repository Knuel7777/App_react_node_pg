CREATE DATABASE "MascotasDB"
    WITH
    OWNER = root
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE Cliente (
    id SERIAL PRIMARY KEY,
    nombre_completo VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(255) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    es_activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE Articulo (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion VARCHAR(500)
);

CREATE TABLE Mascota (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    especie VARCHAR(255) NOT NULL,
    imagen VARCHAR(255)
);

INSERT INTO public.articulo(nombre, precio, descripcion)
VALUES ('Item1', 200, 'Comida para Perros'),
('Item2', 2500, 'Casa para Perros'),
('Item3', 215, 'Comida para Gatos'),
('Item4', 953, 'Rescador para Gatos');

INSERT INTO public.mascota(nombre, especie, imagen)
VALUES ('Spark','Perro','https://i.ibb.co/hd0Kg9H/img1.jpg'),
('Scale','Dragon','https://i.ibb.co/ZY7VpGJ/img4.jpg'),
('Pyro','Fenix','https://i.ibb.co/vkXVbkw/img3.jpg'),
('Fly','Serpiente','https://i.ibb.co/7KCVZFc/img2.jpg');