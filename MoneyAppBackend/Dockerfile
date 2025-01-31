# This file is used to build the Docker image for the MoneyAppBackend service
# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MoneyAppBackend/MoneyAppBackend.csproj", "./"]
RUN dotnet restore "./MoneyAppBackend.csproj"

COPY . .
WORKDIR "/src/MoneyAppBackend"
RUN dotnet build "./MoneyAppBackend.csproj" -c Release -o /app/build

# This stage is used to publish the service project to be copied to the final stage

RUN dotnet publish "./MoneyAppBackend.csproj" -c Release -o /app/publish 

# This stage is used in production or when running from VS in regular mode
# (Default when not using the Debug configuration)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "MoneyAppBackend.dll"]
EXPOSE 5234