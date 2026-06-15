test traspaso (18:54)

comando docker

docker run -p 3000:3000 --env-file .env adoptme-back:1.0

docker run --env-file .env -p 3000:3000 adoptme-back:1.0

---

docker tag adoptme-back:1.0 nivergara/adoptme-back:1.0
docker push nivergara/adoptme-back:1.0
docker scout quickview nivergara/adoptme-back:1.0

---

docker build -f Dockerfile.test -t adoptme-back-test:1.0 .

docker run --rm adoptme-back-test:1.0
