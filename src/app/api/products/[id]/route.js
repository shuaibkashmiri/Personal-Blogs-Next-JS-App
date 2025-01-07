export async function GET(request, { params }) {
  const { id } = params;
  return new Response(
    JSON.stringify({ message: `Fetching Product ID: ${id}` }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function POST(request) {
  const body = await request.json();
  return new Response(
    JSON.stringify({ message: "Product Created", data: body }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();
  return new Response(
    JSON.stringify({ message: `Product ID: ${id} Updated`, data: body }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function DELETE(request, { params }) {
  const { id } = params;
  return new Response(
    JSON.stringify({ message: `Product ID: ${id} Deleted` }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
