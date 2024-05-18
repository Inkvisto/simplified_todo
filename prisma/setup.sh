psql -f install.sql -U postgres
npx prisma migrate dev --name init
