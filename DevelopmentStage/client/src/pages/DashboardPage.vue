<template>
    <div class="grid-container">
        <div class="grid-item ">
            <schedule-review/>
        </div>
        <div class="grid-item large">
            <weekly-overview/>
        </div>
        <div class="grid-item ">
            <study-progress/>
        </div>
        <div class="grid-item large">
            <readings-summary/>
        </div>
        <div class="grid-item ">
            <next-reading/>
        </div>
        <div class="grid-item ">
            <performance-metric/>
        </div>
        <div class="grid-item ">
            <FeaturedThread/>
        </div>
        
    </div>
</template>

<script>
import FeaturedThread from '../components/Dashboard/FeaturedThread.vue'
import NextReading from '../components/Dashboard/NextReading.vue'
import PerformanceMetric from '../components/Dashboard/PerformanceMetric.vue'
import ReadingsSummary from '../components/Dashboard/ReadingsSummary.vue'
import ScheduleReview from '../components/Dashboard/ScheduleReview.vue'
import StudyProgress from '../components/Dashboard/StudyProgress.vue'
import WeeklyOverview from '../components/Dashboard/WeeklyOverview.vue'


export default {
    name: 'DashboardPage',
    components:{
        FeaturedThread,
        NextReading,
        PerformanceMetric,
        ReadingsSummary,
        ScheduleReview,
        StudyProgress,
        WeeklyOverview
    }
}
</script>

<style>

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #2196F3;
    padding: 10px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
.grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
}

.large{
    grid-column-start: 2;
    grid-column-end: 4;
}
</style>