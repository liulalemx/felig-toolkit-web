import { NextRequest, NextResponse } from "next/server"
import felig_toolkit from "felig-toolkit"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const text = searchParams.get("text")
  const type = searchParams.get("type")

  try {
    let res = ""

    if (type === "stem") {
      res = await felig_toolkit.stem(text!)
    } else if (type === "trans") {
      res = await felig_toolkit.felig_transliterate(text!, "am")
    } else if (type === "stp") {
      res = await felig_toolkit.rmvStopwrd(text!)
    } else if (type === "lex") {
      res = await felig_toolkit.lexAnalyze(text!)
    }

    return NextResponse.json(
      { result: res },
      {
        status: 200,
      }
    )
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
