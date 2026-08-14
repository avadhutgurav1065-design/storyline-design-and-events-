# ---- Stage 1: Build ----
FROM maven:3.9.6-eclipse-temurin-18 AS build
WORKDIR /app
COPY pom.xml .
# Download dependencies first (cached layer)
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean package -DskipTests -B

# ---- Stage 2: Run ----
FROM eclipse-temurin:18-jre
WORKDIR /app
COPY --from=build /app/target/storyline-events-1.0.0.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
