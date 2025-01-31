<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'created_by',
        'updated_by',
        'assigned_user_id',
        'project_id',
        'image_path',
        'due_date',
        'status',
        'piority',
        'description',
    ];
    public function createdBy(){
        return $this->belongsTo(User::class,'created_by');
    }
    public function assignedUser(){
        return $this->belongsTo(User::class,'assigned_user_id');
    }
    public function updatedBy(){
        return $this->belongsTo(User::class,'updated_by');
    }
    public function project(){
        return $this->belongsTo(Project::class);
    }
}
