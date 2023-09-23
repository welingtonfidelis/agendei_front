import { EndPoints } from "../../../shared/enum/endPoints";
import RestRequestService from "../api";
import { AgendaListPayload, AgendaListResponse } from "./types";

const { LIST } = EndPoints.AGENDA;

export const getAgendaList = async (params: AgendaListPayload) => {
  // const { data: response } = await RestRequestService.get<AgendaListResponse>(
  //   LIST,
  //   { params }
  // );

  const response: AgendaListResponse = {
    total: 5,
    agenda: [
      {
        id: 1,
        client_name: 'Olga',
        medical_specialty: 'Geral',
        start: new Date('2023-09-18T10:00:00.346Z'),
        end: new Date('2023-09-18T11:00:00.346Z'),
      },
      {
        id: 1,
        client_name: 'Kely',
        medical_specialty: 'Gravidinha',
        start: new Date('2023-09-20T8:30:00.346Z'),
        end: new Date('2023-09-20T9:00:00.346Z'),
      },
      {
        id: 1,
        client_name: 'Roberto',
        medical_specialty: 'Geral',
        start: new Date('2023-09-18T11:00:00.346Z'),
        end: new Date('2023-09-18T11:30:00.346Z'),
      },
      {
        id: 1,
        client_name: 'Hellem',
        medical_specialty: 'Dermatologista',
        start: new Date('2023-09-22T14:30:00.346Z'),
        end: new Date('2023-09-22T15:00:00.346Z'),
      },
    ]
  }
  return response;
};