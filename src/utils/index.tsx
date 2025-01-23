export interface Bottle {
  id: number;
  nome: string;
  codigo: string;
  dataCompra: string;
  dataVencimento: string;
  mensagem: string;
  status: string | null;
}

// trabalhar com datas no formato dd/mm/yyyy e com lib para converter datas correto

export function getFormatDate(date: string) {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString()
}

// trabalhar com datas sem o / e com lib para converter datas correto
export function getFormatPassword(date: string) {
  const dateObj = new Date(date)
  dateObj.valueOf()
  return dateObj.toLocaleDateString()
}