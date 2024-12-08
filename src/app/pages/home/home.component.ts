import { Component, OnInit } from '@angular/core';
import { GeminiService } from '../../services/gemini.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  prompt: string = '';
  generatedContent: string[] = [];

  ngOnInit(): void {}

  constructor(private geminiService: GeminiService) {}

  generateContent() {
    this.geminiService.generateContent(this.prompt).subscribe(
      (response) => {        
        this.generatedContent.push(response.candidates[0].content.parts[0].text);
      },
      (error) => {
        console.error('Error generating content:', error);
      }
    );
  }
}
