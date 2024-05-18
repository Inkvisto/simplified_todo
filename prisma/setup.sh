psql -f install.sql -U postgres
npx prisma migrate dev --name init
# PGPASSWORD=marcus psql -d elif -f data.sql -U marcus
