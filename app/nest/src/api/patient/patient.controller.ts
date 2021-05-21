import {
  Controller,
  // Get,
  // Param,
  Post,
  Body,
  // Put,
  // Delete,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import {
  Patient as PatientModel,
} from '@test-center/prisma';

@Controller()
export class PatientController {
  constructor(
    private readonly patient: PatientService,
  ) {
    /**/
  }


  @Post('patient')
  async createPatient(
    @Body() patientData: { name?: string; email: string },
  ): Promise<PatientModel> {
    return this.patient.create(patientData);
  }

}
