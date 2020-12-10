import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Tarefa } from "./Tarefas/tarefa.model";
import { TarefasService } from "./Tarefas/tarefas.service";

@Controller('tarefas')
    export class TarefasController {

        constructor(private tarefaService: TarefasService){

        }

        @Get()
        async retornar(): Promise<Tarefa[]> {
            return this.tarefaService.exibirTarefas();
        }

        @Post()
        async criar(@Body() tarefa: Tarefa) {
            this.tarefaService.criarTarefa(tarefa);
        }

        @Put()
        async gerenciar(@Body() tarefa: Tarefa) {
            this.tarefaService.gerenciarTarefa(tarefa);
        }
        
        @Put('/concluir')
        async concluir(@Body() tarefa: Tarefa) {
            this.tarefaService.concluirTarefa(tarefa);
        }

}