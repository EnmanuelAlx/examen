# Análisis del problema.

Antes de tomar cualquier decisión, primeramente se analizó a detalle el
problema planteado, en el cual se solicita la realización un software
para predecir el clima. Este viene dado gracias a la posición de los
planetas que poseen una órbita circular alrededor de una estrella.

Estos planetas tienen una velocidad dada en grados/días, un sentido y
una distancia con respecto al sol.

Teniendo esto en consideración, se deduce que el año para cada planeta
viene dado por su velocidad entre los 360 grados propios de una
circunferencia.

Para poder predecir el clima en los tres planetas, se requieren las
coordenadas x, e y de los mismos, y debido a que se poseen sus
coordenadas polares dependiendo del día, se realizó una conversión de
coordenadas polares a rectangulares con la fórmula mostrada en la figura
1, donde el ángulo Ө viene dado por la multiplicación del día en el cual
se encuentra el planeta, por la velocidad y el sentido

```math
x = r \cos \theta
```

```math
y = r \sin \theta
```
> Figura 1: Conversión de coordenadas polares a rectangulares

Con las coordenadas rectangulares de cada uno de los planetas, se valida
si estos son colineales, quiere decir, que están alineados uno con el
otro, existen muchas formas de hacerlo, pero la escogida en este caso
fue la de calcular el área de un triángulo dando tres puntos. Si el área
era igual a cero (0), quiere decir, que estos puntos estaban alineados,
de lo contrario, los tres puntos formaban un triángulo.

Si los puntos son colineales, con respecto al solm quiere decir que el
sistema solar experimentará un periodo de sequía, de lo contrario se
encuentra en condiciones óptimas de presión y temperatura.

Para determinar en qué caso se encuentran los planetas, se calcula la
distancia entre la recta que forman los planetas, y el punto de origen
que es donde se encuentra el sol. Para ello se calcula la pendiente de
la recta, y se valida si esta se encuentra en el eje

de las abscisas u ordenadas, dando cero o infinito respectivamente. Si
esto ocurre, la distancia entre la recta y el punto de origen es cero,
de lo contrario, se calcula la distancia normalmente. Si la distancia es
cero, quiere decir que los planetas están alineados con el sol, de lo
contrario, no.

Si los puntos no son colineales, quiere decir, que forman un triángulo,
por lo tanto, se verifica si el punto de origen se encuentra dentro de
ese triángulo, para saber así, si se entrara en un periodo de lluvia.
Esto se logra calculando el área del triángulo que forman las
coordenadas ABC de los tres planetas, luego se calcula el área de los
triángulos formados por dos planetas y donde se encuentra el sol (el
punto de origen) por lo tanto se calcula el área con los puntos ABP, ACP
y BCP, (siendo P el punto de origen), si la suma del área de esos tres
triángulos, es igual al área del triángulo ABC, quiere decir que el
punto de origen se encuentra dentro del triángulo.

Para conocer el pico de intensidad de la lluvia, se debe conocer cuál es
el máximo perímetro que pueden formar los tres planetas, para ello, se
debe calcular con anterioridad y utilizar una constante con dicho valor.
