FROM golang:1.21.3-alpine3.18 AS builder

WORKDIR /app

COPY golang .

RUN go build -o myapp

# Stage 2: Run the Go application
FROM alpine:3.18

WORKDIR /app

COPY --from=builder /app/myapp .

CMD ["./myapp"]